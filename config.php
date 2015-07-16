<?php  // Moodle configuration file

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'bitnami_moodle';
$CFG->dbuser    = 'bitnami';
$CFG->dbpass    = '47e9419aff';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => 3306,
  'dbsocket' => '/opt/bitnami/mysql/tmp/mysql.sock',
);

if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
    $CFG->wwwroot   = 'https://' . $_SERVER['HTTP_HOST'];
} else {
    $CFG->wwwroot   = 'http://' . $_SERVER['HTTP_HOST'];
};
$CFG->dataroot  = '/opt/bitnami/apps/moodle/moodledata';
$CFG->admin     = 'admin';

$CFG->directorypermissions = 02775;

$CFG->passwordsaltalt1 = 'e8a0949c068c1ab55c0c657c543f4e307088916c94711728df6ea09ad552d19a';
$CFG->passwordsaltmain = '1e97f6b68cc814aaefbc3d87550d025123b47e72a1dc47cfe7db9679a80013c3';
require_once(dirname(__FILE__) . '/lib/setup.php');

// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!
