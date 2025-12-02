<?php
namespace Core\Engine\Modules;

use Core\Engine\Modules\Frontend\Frontend;

class ModuleLoader {

    public function loadFrontend() {
        $frontend = new Frontend();
        $frontend->loadUI();
    }
}
