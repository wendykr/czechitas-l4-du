# Práce s řetězci - Lekce 4

Domácí úkol pro kurz JavaScript 1 od Czechitas.

## 1. Vlastnosti a metody 

V **konzoli prohlížeče** si založte proměnnou title a uložte do ní **název svého oblíbeného filmu** (např. *Pán prstenů*). Proveďte následující úkoly.

- Vypište do konzole **počet znaků** názvu.
- Vypište název filmu převedený na **velká písmena**.
- Vyřízněte z názvu **prvních pět písmen**.
- Vyřízněte z názvu **posledních pět** písmen.


## 2. E-maily

Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

```
jmeno.prijmeni@domena
```

Tedy například:
- `petr.novak@gmail.com`
- `romana.nejedla@czechitas.cz`
- `slavomir.ponuchalek@yahoo.com`

Postupujte dle následujících kroků.
- Vytvořte jednoduchou **webovou stránku** s JavaScriptovým programem.
- Nechte uživatele **zadat jeho e-mail** a uložte si jej do proměnné `email`.
- Pomocí metody `indexOf` najděte v tomto e-mailu **pozici znaku zavináč**. Tuto pozici si uložte do proměnné `atIndex`.
- Pomocí metody `slice` vyřízněte z e-mailu první část představující **jméno a příjmení** uživatele.
- Dále z e-mailu vyřízněte **název domény** tedy například `gmail.com`.
- Ze získaných informací vytvořte **objekt**, který bude vypadat například takto:

```javascript
const parsedEmail = {
	userName: 'slavomir.ponuchalek',
	domain: 'yahoo.com',
}
```

Pro kontrolu **vypište tento objekt do stránky**. Každou hodnotu vypište jako odstavec.


## 3. Doručování

Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje **ulici, číslo domu, město a PSČ**.

- Uložte všechny údaje do vhodně pojmenovaných proměnných.
- Ze zadaných údajů sestavte pomocí **interpolace řetězců** obsahující HTML ve formátu jako níže

```html
<address>
	<p>Pod Stájemi 67</p>
	<p>12754 Klysnov</p>
</address>
```

Pomocí `document.body.innerHTML` vložte sestavené HTML do stránky.