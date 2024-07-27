use env_logger::{Builder, WriteStyle};
use log::LevelFilter;

pub fn init() {
    Builder::new()
        .filter(None, LevelFilter::Info)
        .write_style(WriteStyle::Always)
        .init();
}

