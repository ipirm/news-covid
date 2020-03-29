export default function ({ app, redirect}) {
   if(app.$auth.user === undefined || app.$auth.user === false) {
   } else{
      if(app.i18n.locale === 'en') {
         return redirect('/')
      }else{
         return redirect('/' + app.i18n.locale)
      }
   }
}
