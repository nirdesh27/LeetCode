var merge = function(nums1, m, nums2, n) {
    //if(m==0 && n==0) return [];
    //if( m == 0) nums1 = nums2;
    //if(n == 0) return nums1;
    let total = m+n-1;
    let m1 = m-1;
    let n1 = n-1;
    while (n1 >= 0 && m1 >= 0){
        if(nums1[m1] < nums2[n1]){
            nums1[total] = nums2[n1];
            n1--;
            total--;
        }else{
            nums1[total] = nums1[m1];
            m1--;
            total--;
        }
    }
    while (n1 >= 0) {
        nums1[total--] = nums2[n1--];
    }
    return nums1;
};

console.log("__result is __ ",merge([],0,[1],1));