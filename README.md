1. create settings.json file containing typeorm db information like:
   {
   "db": {
   "type": "oracle",
   "username": "...",
   "password": "...",
   "database": "...",
   "connectString":
   "...",
   "synchronize": true,
   "logging": "all"
   }
   }

   or
   
   {
   "db": {
   "type": "sqlite",
   "database": "",
   "synchronize": true,
   "logging": "all"
   },
   }
2. meteor yarn install
3. meteor run --settings _settingsJsonPath_
