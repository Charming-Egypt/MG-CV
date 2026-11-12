# رفع الموقع على Cloudflare Pages

## الطريقة 1 (الأسهل): من GitHub
1. اعمل Repository جديد على GitHub وارفع محتويات المجلد ده فيه (من غير node_modules).
2. ادخل على dash.cloudflare.com > Workers & Pages > Create > Pages > Connect to Git.
3. اختار الـ Repository، وحط الإعدادات دي:
   - Framework preset: Vite (أو None)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. دوس Save and Deploy. بعد دقيقتين هيدّيك رابط `https://اسم-المشروع.pages.dev`.

## الطريقة 2: Direct Upload (من غير GitHub)
على جهازك (محتاج Node.js 18 أو أحدث):
```
npm install
npm run build
```
وبعدين من Cloudflare: Workers & Pages > Create > Pages > Upload assets، وارفع مجلد `dist` كله.

## دومين خاص (اختياري)
من Pages > مشروعك > Custom domains، ضيف الدومين بتاعك (مثلاً www.discover-sharm.com أو دومين فرعي زي portfolio.discover-sharm.com).

## ملاحظات
- فورم التواصل بيفتح تطبيق الإيميل عند الزائر بالرسالة جاهزة. لو عايز الرسائل توصلك مباشرة، اعمل حساب على EmailJS وحط المتغيرات الثلاثة الموجودة في `.env.example` في Environment variables بتاعة Cloudflare.
- لتغيير الصورة: استبدل `src/assets/hero_assets/me.jpg` و `src/assets/about_section/me.jpg` بصورة أعلى جودة (يفضل 1200px عرض أو أكتر).
- ملف الـ CV موجود في `public/Mohamed-Gamal-CV.pdf` وبيتحمّل من الزر في الموقع.
