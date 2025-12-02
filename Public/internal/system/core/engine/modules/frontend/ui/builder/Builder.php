<?php
namespace Core\Engine\Modules\Frontend\UI\Builder;

use Core\Engine\Modules\Frontend\UI\Builder\Renderer\Renderer;

class Builder {

    public function render() {
        $renderer = new Renderer();
        $renderer->output();
    }
}
