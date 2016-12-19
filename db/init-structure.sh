#!/bin/bash

# Create our database
mysqladmin -u root -p create colors-for-iaas

# Get a password to use for our appuser
export USER=cfi_appuser
export PW=$(</dev/urandom tr -dc 'A-Za-z0-9' | head -c 20
)
# Save the password to a conf file for the app
echo "{\"username\":\"$USER\",\"password\":\"$PW\"}" > ../app/models/db.conf
# and use the password for a new database user
mysql -u root -p -e "CREATE USER '$USER'@'localhost' IDENTIFIED BY '$PW'; GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON \`colors-for-iaas\`.* TO '$USER'@'localhost'; FLUSH PRIVILEGES;"
