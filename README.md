# pages-password

## demo

- Url
  - https://ssatosays.github.io/pages-password/
- Password
  - password123

<img src="https://github.com/ssatosays/pages-password/assets/86867075/c132caf3-c548-45ef-9de7-d7d3466eb368" width="75%"/>

## setup

#### 1. Edit `userid` and `repo` in `docs/index.html`

```
$ grep -e 'const userid' -e 'const repo' docs/index.html -n
38:        const userid = 'ssatosays';
39:        const repo = 'pages-password';
```

#### 2. Make directory with yourpassword

```bash
$ node mkdir.js yourpassword
Directory named "docs/e3c652f0ba0b4801205814f8b6bc49672c4c74e25b497770bb89b22cdeb4e951" created.
$ ls docs/
404.html                                                          ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f
e3c652f0ba0b4801205814f8b6bc49672c4c74e25b497770bb89b22cdeb4e951  index.html
```

```bash
# If not given the first argument
$ node mkdir.js
Please provide a password as the first argument.

# If the directory already exists
$ node mkdir.js password123
Directory named "docs/ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f" already exists.
```

#### 3. Check your GitHub Pages after commit/push
