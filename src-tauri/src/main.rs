#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use store::global::{listen_global_change_event, GlobalState};
use tauri::Manager;

mod constants;
mod logger;
mod store;

fn main() {
    logger::init();

    tauri::Builder::default()
        .setup(|app| {
            listen_global_change_event(app.app_handle().clone());
            Ok(())
        })
        .manage(GlobalState::default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

