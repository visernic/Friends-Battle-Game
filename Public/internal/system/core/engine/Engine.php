<?php
namespace Core\Engine;

use Core\Engine\Modules\ModuleLoader;

class Engine {

    public function run() {
        $module = new ModuleLoader();
        $module->loadFrontend();
    }
}
