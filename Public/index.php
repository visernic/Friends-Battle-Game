<?php

define("ROOT", dirname(__DIR__));

// Load Bootstrap
require ROOT . "/internal/system/core/bootstrap.php";

// Run Frontend
$core = new Core\Engine\Engine();
$core->run();
