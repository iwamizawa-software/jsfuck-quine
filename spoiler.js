function f(W){
S={0:'[+[]]'};
for(R in B=
('!![]&![]&[][[]]&+[![]]&'+
(b=`[]['at']`)+
`&([]+[])['fontcolor']()&+('11e20')&(![]+[])['split']([])&([]+[])`+(e=`['constructor']`)+`&`+
b+e+`('return escape')()(` +b+')&(+[])'+e
).split('&')
)
for(F in r=eval(v='('+B[R]+'+[])'))
S[g=r[F]]=S[g]||v+`['`+F+`']`;
for(v='[',B=0;++B<36;)
S[r=B.toString(36)]=
B<10?
(v+='+!+[]')+']'
:
S[r]||`(+('`+B+`'))['to'+([]+[])`+e+`['name']]('36')`;
U='nd0tu21frNe34al5';
b+=e+`('eval(unescape("`+(W='eval(W='+JSON.stringify(W)+')').replace(/./g,l=>U[(V=l.charCodeAt())>>4]+U[V&15]);
for(b+=`".replace(/./g,(f,r)=>"%".slice(r<<31<0)+"`+U+`".search(f).toString(16))))')()`,R=7;R--;)
b=b.replace(/'.*?'/g,B=>[...B].slice(1,-1).map(b=>S[b]).join('+'));
console.log(b)
}
f(f.toString().replace(/^ +| +$/mg, "").split("\n").slice(1, -1).join(""))
