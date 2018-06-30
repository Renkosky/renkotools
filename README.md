# renkotools

A simple vue2.0 Component library

## Components

### 1.rnStars

```javascript
<rnStars :num='3'></rnStars>
```

| propsName |  type  |                        description |
| --------- | :----: | ---------------------------------: |
| num       | number | the numbers of stars(default is 5) |

### 2.rnSwitch

```javascript
<rnSwitch />
```

| propsName      |  type   |                  description |
| -------------- | :-----: | ---------------------------: |
| btnColor       | string  |    the color of switchbutton |
| btnColor       | string  | switchbar's background color |
| defaultChecked | boolean |     initial status of switch |

### 3. rnToast

```javascript
 <button @click='toast'>click</button></button>


 methods: {
    toast () {
      rnToast('Toast test')
    }
  }
```
