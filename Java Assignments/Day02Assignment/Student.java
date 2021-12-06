package com.sonata;

public class Student {
	int stdid;
	String stdname;
	int stdClass;
	
	Student(int n, String name, int c){
		this.stdid = n;
		this.stdname= name;
		this.stdClass=c;
		}
		Student(){}
	
	public void display()
	{
		System.out.println(stdid);
		System.out.println(stdname);
		System.out.println(stdClass);
	}
	
	public static void main(String args[])
	{
		Student s1 =new Student();
		s1.stdid=101;
		s1.stdname="Lucky";
		s1.stdClass=9;

		s1.display();
		
		Student s2 = new Student(102,"Laya",8);

		s2.display();
		
		
		
	}



}

