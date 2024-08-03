use serde::Deserialize;

#[derive(Deserialize)]
pub enum GlobalStoreMethods {
    ZwIncrement,
}

