# Angular2 Electron KeyDepot (with angular cli)



# Clone the repo

```bash
git clone git@192.168.111.29:hardes/keydepotCore.git
git clone git@192.168.111.29:hardes/keydepotDesktop.git

cd keydepotCore
npm install
typings install

# Compile typescript into dist
tsc

# Copy package into dist
cp package.json dist/

# Go into dist to create a globally-installed symbolic link
cd dist

# npm link
# npm link does not work... so we use pack (temporarly)
npm pack
# Or npm publish

# Note: during dev, you can use 'tsc -w'
```


```bash
cd ../keydepotCore
# angular2 cli required
npm install -g angular-cli


# install
npm install

# Create a symlink from the local node_modules folder to the global shared module symlink
# npm link ngrx-demo-core
# npm link does not work... so we use pack/install (temporarly)
npm install ../keydepotCore/dist/keydepot-core-0.0.1.tgz

# run webpack dev server
npm start

# run karma tests
npm test

# build angular project
--> npm run build

# preview electron (without angular build)
--> npm run electron

# create electron package (build included)
npm run package

```
