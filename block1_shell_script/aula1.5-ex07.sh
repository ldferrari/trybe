#!/bin/bash

caminho=$1

if [ -f $caminho ]
  then
        echo "$caminho é um arquivo comum"
elif [ -d $caminho ]
  then
        echo "$caminho é um diretório"
else
        echo "$caminho é outro tipo de arquivo"
fi
ls -l $caminho
