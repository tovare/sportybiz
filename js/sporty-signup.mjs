import { define, html } from 'https://unpkg.com/hybrids@2.0.2/src/index.js';


const SportySignup = {
  render: () => html`
  <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    <div class="pa4-l">
  <form class="bg-light-blue mw7 center pa4 br2-ns ba b--black-10">
    <fieldset class="cf bn ma0 pa0">
      <legend class="pa0 f5 f4-ns mb3 black-80">Sign up to our newsletter</legend>
      <div class="cf">
        <label class="clip" for="email-address">Email Address</label>
        <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
            placeholder="Your Email Address" 
            type="text" name="email-address" 
            value="" id="email-address">
        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe">
      </div>
    </fieldset>
  </form>
</div>
 `,
};

define('sporty-signup', SportySignup);



