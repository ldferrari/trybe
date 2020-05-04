#!/bin/bash

diretório=$1
extensao=$2

ext=`ls *.$extensao`
data=$(date +%F)

for ex in $ext
   do
	echo Nome alterado de $ex para $data-$ex.  
        mv $ex $data-$ex
done
