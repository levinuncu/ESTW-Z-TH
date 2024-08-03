use serde::{Deserialize, Serialize};

use super::{keys::GlobalStoreKeys, methods::GlobalStoreMethods};

#[derive(Deserialize)]
pub struct GlobalPayload {
    pub method: GlobalStoreMethods,
}
#[derive(Serialize, Clone)]
pub struct GlobalPayloadZw {
    pub key: GlobalStoreKeys,
    pub value: i16,
}

