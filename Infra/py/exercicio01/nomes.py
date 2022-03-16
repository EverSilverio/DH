import fileinput
a = 0
for nome in fileinput.input("lista_nomes.txt"):
    if nome.strip() == 'Everton':
        print ("Encontrei o Everton")
    else:
        a += 1
        
print ("Encontrei outros ", a, "nomes")
