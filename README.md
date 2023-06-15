##  Includere Validation Js
Per utilizzare Validation Js nel tuo progetto, scarica il file JS `validation.js` e includilo nella tua pagina html.
```html
<script src="validation.js"></script>
```
##  HTML 
```html
<form id="form" method="POST">
       <!-- inserisci label e input qui -->
      <button type="submit">Invia</button>
</form>
<div id="error-message"></div>
<div id="confirmation-message"></div>
```
## HTML Contact Form
Include conteggio caratteri rimanenti per la text-area
```html
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="cognome">Cognome:</label>
      <input type="text" id="cognome" name="cognome" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="telefono">Numero di telefono:</label>
      <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" required>

      <label for="messaggio">Messaggio:</label>
      <textarea id="messaggio" name="messaggio" maxlength="150" required></textarea>
      <div id="char-counter"></div>
```
## HTML Register
Include mostra - nascondi password
```html
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="password">Password:</label>
      <div class="password-input">
        <input type="password" id="password" name="password" required>
        <button type="button" id="toggle-password">Mostra Password</button>
      </div>

      <label for="confirm-password">Conferma Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" required>
```
## HTML Login
Include mostra - nascondi password
```html
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="password">Password:</label>
      <div class="password-input">
        <input type="password" id="password" name="password" required>
        <button type="button" id="toggle-password">Mostra Password</button>
      </div>
```
