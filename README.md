## Fail-safe wrapper around Gatsby-Image component

---

### How it works

- If the transformed localFile cannot be found, the original image is used.
- If the passed image is `null|undefined`, a placeholder image will be used.

### Setup

#### 1. Install

```bash
npm i safe-gatsby-image-plugin
```

#### 2. Usage example

```jsx
 import { Image } from 'safe-gatsby-image-plugin';

 // Example of of what a typical image object returned by Gatsby looks like
 const imageDataObj = {
   localFile: {
     alt_text,
     source_url,
     childImageSharp: {
       fluid: {
         ...
       }
     }
   }
 }
 <Image data={imageDataObj} className='image-class' style={{marginTop: 10}} />
```
