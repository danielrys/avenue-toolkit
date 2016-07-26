# To make it work: 
 * `npm install https://github.com/danielrys/avenue-toolkit` 
 * import scss files of any used components into your app scss (*TODO* move the scss inline so that this step is not needed)

# Component list
Following components are available at the moment.
## Accordion Item
A single collapsible item. When used with *Accordion directive* and sibling items, only one at a time is open.
### Usage
 * `import {AccordionItem} from 'avenue-toolkit'`
 * add to `directives` array inside the decorator
 * use inside a template
 ``` html
<div accordion>
    <accordion-item>
        <accordion-item-head>Displayed clickable title</accordion-item-head>
        <accordion-item-content>Some collapsible content hidden by default.</accordion-item-content>
    </accordion item>
</div>
 ```

# Directive list
Following directives are available at the moment.
## Accordion
Parent directive for the *Accordion item* components. Multiple items can be inside an element with this directive.
### Usage
 * `import {AccordionItem} from 'avenue-toolkit'`
 * add to `directives` array inside the decorator
 * use inside a template
 ``` html
<div accordion>
    <!-- Accordion items-->
</div>
 ```