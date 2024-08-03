pub enum GlobalStoreEvents {
    ChangeEvent,
    SyncEvent,
}

impl ToString for GlobalStoreEvents {
    fn to_string(&self) -> String {
        match self {
            Self::ChangeEvent => "GlobalChangeEvent",
            Self::SyncEvent => "GlobalSyncEvent",
        }
        .to_string()
    }
}

