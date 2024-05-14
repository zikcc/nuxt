import { d as defineEventHandler, g as getQuery } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const WORKS = [
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/figgen-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/myokr-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/dlt-website-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#245B57", "#004741"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/dl-unify-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#003052", "#167187"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#3A0000", "#771E1E"],
    url: "#",
    data: "2024-5-11"
  }
];

const works_get = defineEventHandler((event) => {
  const query = getQuery(event);
  const page = query.page;
  const pageSize = query.pageSize;
  const works_5 = WORKS.slice((page - 1) * pageSize, page * pageSize);
  return {
    works_5
  };
});

export { works_get as default };
//# sourceMappingURL=works.get.mjs.map
