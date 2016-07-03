# LV Hackathon

DDMRP présenté par Laurent Vigouroux

5 étapes pour s’adapter à DDRMP

### 1. Déjà fait normalement, mise en place d'une ERP

### 2. Création de buffer

GREEN

```
 MAX(MOQ taille de lot, OrderCYCLE * ADU,  LT * ADU * Leadtime Factor)
```

LTF court  75%, moyen 50%, long 25 %

Yellow

```
 Usage during leadtime : ADU * LT
```
Red
```
base	 LeadtimeFactor  * ADU * LT
safety  ADU * LT * LTF * VF
VarFactor see Doc
```

ADU by forecast,by the past (horizon d’analyse courte = ADU Horizon)


### 3 Ajustements des buffers

ADU fait croitre les buffers => ventes

Acthung Spécificité LV

Noel et fermeture des ateliers en été
Workaround zone d’anticipation (storage en plus) pour absorber la demande de Noël

### 4 Net flow equation
```
onhand  + on-order - qSod
stock + appro -  commande clients (chez LV,  QSOD = ADU)
```
pour faire des recommendations d'achats

### 5 Planning

Execution View

stock average
```
zone rouge +  1/2 de green
```

stock physique
```
1/2 red +   green
```


### Impro storage
LeadTime reduction green en moins 
