#!/usr/bin/env bash
if [ -z ${ENVIRONMENT} ] ; then
  export ENVIRONMENT="local"
else
  export ENVIRONMENT=${ENVIRONMENT}
fi

if [ -z ${MODULE_PROJECT} ] ; then
  printf "\nMODULE PROJECT IS NOT DEFINE\n"
  if [ -z ${TEST_FILE_PATH} ] ; then
    echo "================================"
    echo "START TESTING ALL MODULE"
    echo "================================"
    npm run codeceptjs:headless
  else
    echo "================================"
    echo "START TESTING ON PATH FILE ${TEST_FILE_PATH}"
    echo "================================"
    npm run codeceptjs:headless
  fi
else
  echo "============================================"
  echo "RUNNING FOR MODULE PROJECT $MODULE_PROJECT"
  echo "============================================"
  IN=${MODULE_PROJECT}
  ARR_MODULE=(${IN//,/ })
  if [ ${#ARR_MODULE[@]} -lt 1 ]; then
    echo "===================================="
    echo "WILL RUNNING ON SINGLE MODULE $IN"
    echo "===================================="
    export STRING_MODULE="+($IN)" 
  else
    count=0
    STRING_MODULE=""
    while [ $count -lt ${#ARR_MODULE[@]} ]
    do
        if [ $count -eq  0 ]; then
          STRING_MODULE=$STRING_MODULE"${ARR_MODULE[$count]}"
        else
          STRING_MODULE=$STRING_MODULE"|${ARR_MODULE[$count]}"
        fi
        count=$(( $count + 1 ))
    done
    export STRING_MODULE="+($STRING_MODULE)"
  fi

  if [ -z ${RUNNER_WORKER} ] ; then
    npm run codeceptjs:headless
  else
    HEADLESS=true npx codeceptjs run-workers $RUNNER_WORKER --steps --reporter mochawesome
  fi

  exit 1
fi