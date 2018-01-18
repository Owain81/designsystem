---
title: Environment
layout: default-page
category: motion
permalink: motion/environment/
order: 2
breadcrumbs: true
---

## 3D Layering

The environment is based on the 3D space: x, y and z axis are used for it but there is a particularity:

The Z index is located perpendiculary to the screen plane and it is only used for layering, i.e it is not meant to be used to create perspective. In that case, the X and Y axis are manipulated to emulate the 3D world.

[comment]: <> (3D Layering [PNG])
{% include website/image.html src="images/motion-design/3dlayering.png" %}

## Layer sorting

In the real world we know we cannot pass through solid objects. Therefore, our elements and components will have the same behavior. In addition, these could be stacked or set next to another one.

The following layer sorting scheme is used in order to avoid physical interferences between objects, maintain proper sorting, recognize the hierarchy of the components and create a good shadow system.

[comment]: <> (Layers and shadows [PNG])
{% include website/image.html src="images/motion-design/layersandshadows.png" %}

The picture above represents a layer sorting system based on 8 levels of depth with 4 shadow zones. For the lower levels, smaller and smoother shadows. For the higher levels, bigger and darker shadows.

In order to avoid high workloads of hardware and improve the performance of the software, the shadows system has been grouped only into 4 zones.

**Why?** Well, the shadows are a special feature that requires a lot of resources to be properly rendered, i.e. more shadow levels, more workload. **Using only 4 levels allows us to save resources**. Imagine if it would be at least, 8 zones (1 zone per layer) or more… Huge workload with no much different between the layers!

**How does it work?** Several levels are grouped into different **zones** _(z1, z2, z3 and z4)_ with different shadows. By playing with the levels of each zone, we can easily create the illusion of depth and differentiate the objects with clarity.

Some objects have two different states:

**Rest state**
It is the natural state of the object when it is not manipulated by any event or interaction. The layer level, features and characteristics are equal to defaults.

**Event state**
It is the state when the object is manipulated by any event or interaction between layers. The layer level changes and its features and characteristics might be transformed.

## Shadows

The components of our software are like physical objects (we will treat them in the next chapter), therefore they cast shadows if a light source is pointed against them. In our software we create the illusion of light sources from two different points: **top light** (ambient) and **front light** (focus). Using both together we give the objects the feeling of depth and height in the scenario.

#### Top Light

[comment]: <> (Top Light [PNG])
{% include website/image.html src="images/motion-design/toplight.png" %}
_It is the general light of the scenario. This light, works like our Sun, falls upon the surface of the object giving a smooth shadow in order to represent the location of the object_

#### Front Light

[comment]: <> (Front Light [PNG])
{% include website/image.html src="images/motion-design/frontlight.png" %}
_It is the light focused on the object. This light, works like a lamp, focus directly on the object giving a strong shadow in order to represent the height where it is located_

As it was explained before, we manipulate the sX and Y axis to represent the look and feel of the 3D World, so for shadows we vary the light location with respect to the Y axis to get a concrete shadow for every layer level.

At the pics below you can check the merge of both shadows making the natural one.

Shadow’s parameters for several environments

[comment]: <> (Shadows merge [PNG])
{% include website/image.html src="images/motion-design/shadowcombination.png" %}
_The final shadow is the result of combining the shadows of both lights_

[comment]: <> (Shadows specs [PNG])
{% include website/image.html src="images/motion-design/shadowspecs.png" %}
_The color of the shadow will be always $color-grey120 (#4c5358)_

Why shadows? The examples below will clarify all things explained before.

[comment]: <> (Shadows example [PNG])
{% include website/image.html src="images/motion-design/shadowsexample.png" %}

## Material
### Look & Feel

#### Physical properties

Taking into account the density of the mobile screens, each layer has the same height with respect to the Z axis: 1 dp (density-independent pixels). Otherwise, if the height was variable, it would result in more volume and therefore more shadow interceptions in the structure and sorting system.

[comment]: <> (Material density [PNG])
{% include website/image.html src="images/motion-design/materialdensity.png" %}

The material is **solid** so, just like in real life, material cannot pass through other material.

[comment]: <> (Solid material [GIF])
{% include website/image.html src="images/motion-design/solidmaterial.gif" %}

Two or more surfaces cannot occupy the same point in the space at the same time. It means that they could be in the same layer level but not in the same place. That would be physically impossible.

[comment]: <> (Different levels [PNG])
{% include website/image.html src="images/motion-design/differentlevels.png" %}

The user input cannot pass through diverse surfaces because once the event is triggered, it focus the touched surface. Furthermore, as you know, surfaces are solid so user cannot touch directly a surface behind the focused one.

[comment]: <> (User interaction [PNG])
{% include website/image.html src="images/motion-design/userinteraction.png" %}

### Behaviour
Based on our principles, **surfaces can change shape.**
{% include website/video.html src="videos/motion-design/shapes.mp4" %}
_They can also grow and shrink but only along its plane. Remember, we do not use the 3D perspective. Depth is only used for the layer sorting._


Different surfaces could join together to become a single one.
{% include website/video.html src="videos/motion-design/joinandsplit.mp4" %}

They can also split and then become another solid piece. Motion design has the power to make all elements alive.
{% include website/video.html src="videos/motion-design/solidandindividual.mp4" %}
