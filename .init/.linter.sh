#!/bin/bash
cd /home/kavia/workspace/code-generation/taco-haven-promotional-website-4c5600df/taqueria_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

