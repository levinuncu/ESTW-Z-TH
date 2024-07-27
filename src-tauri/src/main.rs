#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


mod logger;

fn main() {
    logger::init();

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

