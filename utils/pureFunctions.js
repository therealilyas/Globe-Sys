export const headFunction = (data = {}) => {
  const title = data.title || "Banking technology услуг по обслуживанию и ремонту банковского оборудования";
  const meta = [];
  if (data.title) {
    const title = [
      {
        hid: "og:title",
        property: "og:title",
        content: data.title,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: data.title,
      },
    ];
    meta.push(...title);
  }
  if (data.description) {
    const description = [
      {
        hid: "description",
        name: "description",
        content: data.description,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: data.description,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: data.description,
      },
    ];
    meta.push(...description);
  }
  if (data.image_url) {
    const image = [
      {
        hid: "og:image",
        property: "og:image",
        content: data.image_url,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: data.image_url,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: data.title || "Image",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: data.image_url,
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: data.title || "Image",
      },
    ];
    meta.push(...image);
  }

  return { title,  meta };
};


export function debounce(fn, delay) {
  let timeout = null
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
