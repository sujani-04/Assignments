package com.sonata;

public class SpecificValue {
	public static void main(String args[])
	{
		int[] num = {1, 2, 3, 4, 5};
	    int a = 3;
	    boolean found = false;

	    for (int n : num) {
	      if (n == a) {
	        found = true;
	        break;
	      }
	    }
	    
	    if(found)
	      System.out.println(a + " is found.");
	    else
	      System.out.println(a + " is not found.");
	  }

}


