<?php
namespace Core\Engine\Modules\Frontend\UI\Builder\Renderer\Main;

class MainApp {

    public function loadApp() {
        require __DIR__ . "/app/view.php";
    }
}
