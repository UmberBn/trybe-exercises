#!/bin/bash
echo "Por favor, antes de prosseguir, verifique se nenhum dos seus arquivos está nomeado com '.' como separador"
echo "EX: nome.do.meu.arquivo.txt"
echo "Nesse caso antes de executar o Script retire os '.' como sepadores de nomes dos seus arquivos"
echo "Para cancelar CRTL+c"
sleep 
ARQ=$1

for ARQUIVOS in `ls $ARQ`
do
if [ ${ARQUIVOS: -3} != '.sh' ] 
then
    A="$(cut -d'.' -f1 <<<"$ARQUIVOS")"
    echo "O Arquivo $ARQUIVOS foi alterado para $A.sh"
    mv "$ARQUIVOS" "$A.sh"
   
fi
done