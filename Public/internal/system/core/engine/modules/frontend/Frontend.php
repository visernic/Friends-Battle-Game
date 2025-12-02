<?php
namespace Core\Engine\Modules\Frontend;

use Core\Engine\Modules\Frontend\UI\UILoader;

class Frontend {

    public function loadUI() {
        $ui = new UILoader();
        $ui->buildInterface();
    }
}
