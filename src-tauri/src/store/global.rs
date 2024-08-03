use crate::constants::global::{
    events::GlobalStoreEvents,
    keys::GlobalStoreKeys,
    methods::GlobalStoreMethods,
    payload::{GlobalPayload, GlobalPayloadZw},
};
use std::sync::Mutex;
use tauri::{AppHandle, Manager};

pub struct GlobalState {
    pub zw: Mutex<i16>,
}

impl Default for GlobalState {
    fn default() -> Self {
        Self { zw: Mutex::new(0) }
    }
}

pub fn emit_global_sync_event(payload: GlobalPayload, app_handle: AppHandle) {
    let state = app_handle.state::<GlobalState>();

    match payload.method {
        GlobalStoreMethods::ZwIncrement => {
            let mut zw = state.zw.lock().unwrap();
            *zw += 1;

            app_handle
                .emit_all(
                    GlobalStoreEvents::SyncEvent.to_string().as_str(),
                    GlobalPayloadZw {
                        value: *zw,
                        key: GlobalStoreKeys::Zw,
                    },
                )
                .unwrap();
        }
    }
}

pub fn listen_global_change_event(app_handle: AppHandle) {
    let app_handle_clone = app_handle.clone();
    let _id = app_handle.listen_global(GlobalStoreEvents::ChangeEvent.to_string(), move |evt| {
        if let Some(payload) = evt.payload() {
            let data: Result<GlobalPayload, _> = serde_json::from_str(payload);
            match data {
                Ok(data) => emit_global_sync_event(data, app_handle_clone.clone()),
                Err(e) => println!("Failed to deserialize payload: {}", e),
            }
        }
    });
}

