package com.sonata;
import java.util.Scanner;

public class CubeOfNumber {
	
	public static void main(String args[])
	{
		int n;
		System.out.println("Enter the value : ");
		Scanner sc = new Scanner(System.in);
	      int num = sc.nextInt();
	      System.out.println("Cube of the given number is "+(num*num*num));
	}

}
