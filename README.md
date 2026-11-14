# sexyhint-footer

Footer compartilhado entre o **Zoho Sites** e o **Zoho Commerce**, hospedado no GitHub Pages.

- Script: https://luigimacarini.github.io/sexyhint-footer/footer.js
- Preview: https://luigimacarini.github.io/sexyhint-footer/ (`?context=store` para ver como loja)

## Código para colar

**Zoho Sites** (Footer Code / Code Snippet):

```html
<div id="sh-footer" data-context="site"></div>
<script src="https://luigimacarini.github.io/sexyhint-footer/footer.js" defer></script>
```

**Zoho Commerce** (Footer Code / Code Snippet):

```html
<div id="sh-footer" data-context="store"></div>
<script src="https://luigimacarini.github.io/sexyhint-footer/footer.js" defer></script>
```

## Atualizar o footer

1. Edite a seção **1. CONTEÚDO** em `footer.js` (textos, links, URLs).
2. `git add . && git commit -m "Atualiza footer" && git push`
3. Em ~1–10 min o GitHub Pages publica e os dois sites passam a mostrar a versão nova
   (o GitHub Pages usa cache de 10 min; use Ctrl+Shift+R para forçar).

## Qual menu aparece em cada domínio

O script detecta o domínio da página (lista `DOMINIOS` em `footer.js`):

| Domínio | Menu |
|---|---|
| sexyhintwholesale.zohosites.com | **site**: About Us, Contact Us, Wholesale FAQ, Shipping & Returns, Privacy Policy + Wholesale Application |
| sexyhintwholesale.zohoecommerce.com | **store**: Retail Store, Product Catalog, Contact Us |

"About SexyHint" (endereços) aparece nos dois. Em outros domínios (editor do Zoho, teste local)
vale o `data-context` do `<div>`. Links com `url: ""` ficam escondidos até serem preenchidos.
