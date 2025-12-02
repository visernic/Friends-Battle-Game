<?php
namespace Core\Engine\Modules\Frontend\UI;

use Core\Engine\Modules\Frontend\UI\Builder\Builder;

class UILoader {
    
    public function buildInterface() {
        $builder = new Builder();
        $builder->render();
    }
}
