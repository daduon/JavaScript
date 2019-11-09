import Mysql from './Mysql.js';
import Oracle from './Oracle.js';
import Splserver from './Sqlserver.js';



const sq = new Splserver();
sq.query();
const my = new Mysql();
my.query();
const or = new Oracle();
or.query();
