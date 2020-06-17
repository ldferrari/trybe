#!/bin/bash

file=$"/home/ferrari/trybe/exercicios_trybe/aula1.5-ex03.sh"

if [ -e $file ]
	then
		echo "O caminho $file está habilitado"
fi
if [ -w $file ]
	then
		echo "Você tem permissão para editar $file"
	else
		echo "Você NÂo tem autorização para editar $file"
fi
