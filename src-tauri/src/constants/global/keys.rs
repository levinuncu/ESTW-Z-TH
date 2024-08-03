use serde::{Serialize, Serializer};

#[derive(Clone)]
pub enum GlobalStoreKeys {
    Zw,
}
impl Serialize for GlobalStoreKeys {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let s: &str = match self {
            Self::Zw => "zw",
        };

        serializer.serialize_str(s)
    }
}

