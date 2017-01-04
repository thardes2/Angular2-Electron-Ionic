# Angular2 ionic2 KeyDepot (with angular cli)



# Clone the repo

```bash

cd core
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
cd ../kmobile
# angular2 cli required
npm install -g angular-cli


# install
npm install

# Create a symlink from the local node_modules folder to the global shared module symlink
# npm link ngrx-demo-core
# npm link does not work... so we use pack/install (temporarly)
npm install ../core/dist/core-0.0.1.tgz

#Testing your app in a browser is as simple as running the serve command in your project’s root folder.
ionic serve

#You can also test right in the simulator using the cordova commands from the previous chapter. For example, to test in the iOS simulator, run:
ionic build ios
ionic emulate ios

#Testing on Android is much easier and faster. To test on the device, simply plug it in, and run
ionic run android




```
