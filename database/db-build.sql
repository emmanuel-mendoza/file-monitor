BEGIN;
\i appdata-schema-creation.sql
\i users.tab
\i states.tab
\i courts.tab
\i files.tab
\i db-first-load.ds

COMMIT;