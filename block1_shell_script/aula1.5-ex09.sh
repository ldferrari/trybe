#!/bin/bash

arg=$1
quantidade=`ls -l $arg | wc -l`

if [ -d "$arg" ]
	then 
	  echo "O $arg tem $quantidade arquivos."
else
	  echo "O argumento $arg não é um diretório!"
fi


