---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt7_Monitoring and Control Systems/"}
---

# 7.01 Monitoring systems  
>[! definition]  
>**Monitoring systems** are often used to *detect* (Using Sensors) when a *physical property* of a system *goes outside a desired range*. Can also be used to *record* the **condition** **of the system**.   
>  
>**Monitoring System** requires (physical components):  
>1. **Sensors**  
>2. **ADC** - Analogue Digital Converter   
>3. **Computing Resource** (which is responsable for)  
>	1. *Data Logging*  
>	2. *Communication System* - communicates between sensors and the station  
>	3. *Central Monitoring Station* - which analysis data  
## Sensor  
>[! definition] Sensor
>Sensor are things which ==*measures* **physical property** of a perticular area==. It can be used for the computer to percept physical world.   
`(For example, like a thermocouple, which outputs changing electrical voltage base on termperature.)`
>
>> [! tk] 
>> It *doesn't* have **built-in intellegence**, it only *outputs* an *analogue signal* for **computer** to *process*.   


# 7.02 Control Systems  
>[! definition]  
>**Control System** is the *combination* of **Monitoring System** with **Actuators** and the **ablility to control the Actuators**.    
>  
>**Monitoring System** requires (physical components):  
>1. **Sensors**  
>2. **Actuators** - Device to interact with surroundings.
>3. **ADC** - Analogue to Digital Converter    
>4. DAC - Digital to Analogue Converter 
>5. **Computing Resource** (which is responsable for)  
>	1. *Data Logging*  
>	2. *Communication System* - communicates between sensors and the station  
>	3. *Central Monitoring Station* - which analyzes data   
>	4. *Control Algorithm Excution* -  to execute actions
## Feedback
When the control system *depends on* **Feedbacks**, it's called a **Closed Loop**; opposite to that, is Open Loop system.  

**Advantages of Feedback**:  
1. Able to perform action independent from the ambient environment.  
2. Able to measure the error produced by the actuator  
### Open Loop & Closed Loop
![Pasted image 20231211112147.png](/img/user/Attachments/Pasted%20image%2020231211112147.png)


# 7.03 Bit Manipulation to control devices
>[! definition]
>In this section give out three ways that bit manipulation could work using ADD, OR, XOR and Mask.
## Reading a specific bit
>[! definition] AND
>AND operator comes handy when you want to read a specific bit.  
> >[! ep] 
>>For example, you have a byte `1011 0010`, which indicates the status (on/off) of eight sensors. When you want to read the status of the third sensor, you may use this (we assume the byte `1011 0010` is already loaded into ACC):   
>>`AND #B00100000` ==<-> here `0010 0000` is a mask==  
>>This will erase all other values in ACC, leaving: `0010 0000`   

## Writing to a specific bit
>[! definition] OR/XOR
>OR and XOR are used to set/unset bits.
>>[! ep] OR
>>For example, you have a byte `1011 0010`, and you want to toggle the sixth bit on. Again, assuming the value is already loaded into ACC, you can do this:  
>>`OR #B00000100` ==<-> here `0000 0100` is a mask==  
>>This will do an OR operation Per Bit between 1011 0010 and 0000 0100. Which will leave the result in ACC: `1011 0110`
>  
>  
>>[! ep] XOR
>>For example, you have a byte `1011 0010`, and you want to toggle the fourth bit off. Again, assuming the value is already loaded into ACC, you can do this:  
>>`XOR #B00010000` ==<-> here `0001 0000` is a mask==  
>>This will do an XOR operation Per Bit between 1011 0010 and 0001 0000. Which will leave the result in ACC: `1010 0010`

Now hopefully you can understand this code here:
![Pasted image 20240319152757.png](/img/user/Attachments/Pasted%20image%2020240319152757.png)  
