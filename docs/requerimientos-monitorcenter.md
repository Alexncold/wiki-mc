---
title: ¿Qué se necesita para usar MonitorCenter?
sidebar_label: ¿Qué se necesita para usar MonitorCenter?
---

# ¿Qué se necesita para usar MonitorCenter?

Conocé los requerimientos para tener tu cámara de seguridad en internet.

## TEST DE VELOCIDAD

Para poder utilizar MonitorCenter, se debe contar con una velocidad de internet adecuada a la cantidad y calidad de cámaras que queramos procesar en la plataforma.

Para poder saber que velocidad de internet tiene disponible, puede hacer un test en [speedtest.net](https://speedtest.net) y verificar el valor de **UPLOAD**. 

Como referencia, una cámara de 1MP puede rondar desde los 1024kb a 2048kb, aunque con los ajustes adecuados podria funcionar con 512kb.

En el caso de querer grabar una cámara de 1MP (1024kb, aprox.), se recomienda una velocidad de subida o UPLOAD de al menos **1,5Mb** para tener tu cámara de seguridad en internet de manera estable.

<div style={{display: 'flex', justifyContent: 'center'}}>

![Test de velocidad de internet](https://monitor-center.com/wp-content/uploads/2021/09/6.jpg)

</div>

## COMPATIBILIDAD

MonitorCenter es compatible con todas las cámaras con las siguientes características:

- Protocolo RTSP
- Codec H264, H264.B y H265

Puede buscar las especificaciones de su cámara en el manual de usuario, o través de internet buscando en google: **MODELO DE CAMARA + RTSP + PATH**

<div style={{display: 'flex', justifyContent: 'center'}}>

![Búsqueda de especificaciones de cámara](https://monitor-center.com/wp-content/uploads/2021/09/search.jpg)

</div>

## ¿Qué es la URL y cómo se forma?

La URL es la URL RTSP del equipo, y se forma de la siguiente manera:

```
rtsp://username:password@direcciondns_o_ip_publica_fija:PUERTO_RTSP/path_rtsp
```

### Ejemplos:

**Para equipos Hikvision:**

```
rtsp://admin:admin1234@micamara.dyndns.org:554/Streaming/Channels/101
```

**Para equipos Dahua:**

```
rtsp://admin:admin1234@micamara.dyndns.org:554//cam/realmonitor?channel=1&subtype=0
```

**Para equipos TPLINK NC450:**

```
rtsp://admin:admin1234@micamara.dyndns.org:554/h264_hd.sdp
```

## APERTURA DE PUERTOS

Para poder acceder al puerto RTSP de cada cámara debe conocer el puerto RTSP de su cámara, y abrirlo en el router. 

La mayoría de los proveedores de internet pueden hacerlo con una simple llamada, pidiendo que se abran los puertos **554** a la ip correspondiente a la cámara o DVR (la cámara o DVR tienen que tener ip fija).

<div style={{display: 'flex', justifyContent: 'center'}}>

![Apertura de puertos en router](https://monitor-center.com/wp-content/uploads/2021/09/router-1.jpg)

</div>
