export default [
  {
    name: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog posts",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "Blog",
    slug: "generate-blog-title",
    aiPrompt: "Give me 5 blog topic ideas in bullet points",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Hashtag Generator",
    desc: "An AI tool that generates relevant hashtags for your content",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "Social Media",
    slug: "generate-hashtags",
    aiPrompt: "Generate 10 relevant hashtags for my content",
    form: [
      {
        label: "Enter your content description",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Title Generator",
    desc: "An AI tool that suggests engaging YouTube video titles",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "YouTube",
    slug: "generate-youtube-title",
    aiPrompt: "Suggest 5 YouTube video titles based on the given topic",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Caption Generator",
    desc: "An AI tool that generates creative Instagram captions",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "Social Media",
    slug: "generate-instagram-caption",
    aiPrompt: "Give me 5 Instagram captions based on the given theme",
    form: [
      {
        label: "Enter your post theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "SEO Meta Description Generator",
    desc: "An AI tool that generates SEO-friendly meta descriptions",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "SEO",
    slug: "generate-seo-meta",
    aiPrompt: "Generate a compelling SEO meta description for my website",
    form: [
      {
        label: "Enter your website description",
        field: "textarea",
        name: "website_desc",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "An AI tool that creates catchy email subject lines",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "Email Marketing",
    slug: "generate-email-subject",
    aiPrompt: "Generate 5 email subject lines based on the given topic",
    form: [
      {
        label: "Enter email content topic",
        field: "input",
        name: "email_topic",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy Generator",
    desc: "An AI tool that generates compelling ad copies",
    icon: "https://cdn-icons-png.flaticon.com/128/3959/3959542.png",
    category: "Marketing",
    slug: "generate-ad-copy",
    aiPrompt: "Create an engaging ad copy for my product",
    form: [
      {
        label: "Enter your product/service details",
        field: "textarea",
        name: "product_details",
        required: true,
      },
    ],
  },
];
