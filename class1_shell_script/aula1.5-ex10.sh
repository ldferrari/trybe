#!/bin/bash

pngs=`ls *.png`
data=$(date +%F)

for png in $pngs
   do
	mv $png $data-$png
done
