package com.sonata;

public class GreatestNumber {
 public static void main(String args[])
 {
	 int a=12,b=25,c=89;
	 if (a>b&&a>c)
	 {
		 System.out.println("The greatest number is " +a);
	 }
	 else if(b>a&&b>c)
	 {
		 System.out.println("The greatest number is " +b);
	 }
	 else
	 {
		 System.out.println("The greatest number is " +c);
	 }
 }
}
