### Requirement to Install
* https://github.com/nvm-sh/nvm
* node >= 15
* npm >= 7
* npx >= 7


### How to Install
* `npm install`


## Folder Structure
```
project
│   README.md
│   run.sh
│   package.json
└───config
│   │ dev.json
│   │ local.json
│
└───test (all BDD testcase)
│   │
│   └───module1
│       │   module1_example1_test.js
│       │   module1_example2_test.js
│       │   ...
│   └───module2
│       │ module2_example1_test.js
│       │ module2_example2_test.js
│       │   ...
│   
└───output (report html)
    │ mochawesome.html
    │ ... 
```

### Configuration Setup
configuration setup is on the folder `config/` this configuration filename is based on `ENVIRONMENT` variable that been setup on the section `Environment Variable` below, meaning if you set `ENVIRONMENT=local` the code will lookup on the folder `config/` for `local.json` file.

#### Add `host` url into for new configuration
1. check on file configuration `.json` file, 
```
"host_varcel": "https://demo.vercel.store/",
"host_custom:" "xxxxx" // add new host configuration on below this section
```

2. open `codecept.config.json` 
look up to line 26
```
 // SETUP CONFIGURATION FOR HOST
  process.env.HOST_VARCEL = config.host_varcel;
```


### How to Run
#### Running all testcase
* `./run.sh`

#### Running testcase with specific module
* `MODULE_PROJECT=module1,module2 ./run.sh`

#### Running testcase with specific test file
* `TEST_FILE_PATH=/*_test.js,/*_test.js ./run.sh`

#### Running testcase with specific test file and environment
* `ENVIRONMENT=local TEST_FILE_PATH=/*_test.js ./run.sh`

### Environment Variable
|Name|Description|Default|
|---|---|---|
|ENVIRONMENT|Define your setup environment *example: local, dev, etc*, if you're own laptop set environment to `local`|local|
|MODULE_PROJECT|If you want to running on specific module, set e the value of the module with `,` as separator *example:product,checkout*|All module testcase|
|TEST_FILE_PATH|specific file test to running|*TEST_FILE_PATH=login/login_local_test.js*|



















